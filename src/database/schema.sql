-- Community Playground Database Schema for Neon PostgreSQL
-- Hand-drawn to AI Game Creation Platform

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table for creator information with Auth0 integration
CREATE TABLE IF NOT EXISTS users (
    auth0_id VARCHAR(255) PRIMARY KEY, -- Auth0 user identifier (e.g., "auth0|648a1234567890abcdef1234")
    username VARCHAR(50) UNIQUE NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE, -- Optional email (Auth0 may not always provide email)
    avatar_url TEXT,
    bio TEXT,
    social_links JSONB DEFAULT '{}',
    is_verified BOOLEAN DEFAULT FALSE,
    total_likes_received INTEGER DEFAULT 0,
    total_maps_created INTEGER DEFAULT 0,

    -- Auth0 specific fields
    auth0_provider VARCHAR(50), -- 'auth0', 'google-oauth2', 'github', etc.
    auth0_nickname VARCHAR(100),
    auth0_picture TEXT, -- Auth0 avatar URL
    last_login TIMESTAMP WITH TIME ZONE,
    login_count INTEGER DEFAULT 0,

    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Games/Maps table for storing community creations
CREATE TABLE IF NOT EXISTS games (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(200) NOT NULL,
    description TEXT,

    -- URLs and media
    game_url TEXT NOT NULL UNIQUE, -- Direct link to playable game
    map_data_url TEXT, -- Link to map data JSON
    thumbnail_url TEXT, -- Preview image
    screenshot_urls TEXT[], -- Additional screenshots

    -- Creator information
    creator_id VARCHAR(255) REFERENCES users(auth0_id) ON DELETE CASCADE,
    creator_name VARCHAR(100) NOT NULL, -- Denormalized for performance

    -- Engagement metrics
    likes_count INTEGER DEFAULT 0,
    shares_count INTEGER DEFAULT 0,
    plays_count INTEGER DEFAULT 0,
    reposts_count INTEGER DEFAULT 0,
    views_count INTEGER DEFAULT 0,

    -- Game metadata
    difficulty_level VARCHAR(20) DEFAULT 'medium', -- easy, medium, hard, extreme
    estimated_play_time INTEGER, -- in minutes
    tags TEXT[] DEFAULT '{}', -- game tags like 'fantasy', 'cyberpunk', etc.

    -- AI generation data
    ai_models_used JSONB DEFAULT '{}', -- Track which AI models were used
    generation_time INTEGER, -- Time taken to generate in seconds
    processing_stats JSONB DEFAULT '{}', -- OpenCV stats, accuracy, etc.

    -- Visibility and status
    is_public BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    is_trending BOOLEAN DEFAULT FALSE,
    featured_until TIMESTAMP WITH TIME ZONE,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Likes table for tracking user likes
CREATE TABLE IF NOT EXISTS likes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) REFERENCES users(auth0_id) ON DELETE CASCADE,
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    UNIQUE(user_id, game_id)
);

-- Shares table for tracking sharing activity
CREATE TABLE IF NOT EXISTS shares (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) REFERENCES users(auth0_id) ON DELETE CASCADE,
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    platform VARCHAR(50), -- 'twitter', 'discord', 'reddit', 'direct_link', etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reposts table for tracking game remixes/forks
CREATE TABLE IF NOT EXISTS reposts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) REFERENCES users(auth0_id) ON DELETE CASCADE,
    original_game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    new_game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    remix_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    UNIQUE(user_id, original_game_id, new_game_id)
);

-- Comments table for community interaction
CREATE TABLE IF NOT EXISTS comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) REFERENCES users(auth0_id) ON DELETE CASCADE,
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    parent_comment_id UUID REFERENCES comments(id) ON DELETE CASCADE, -- For nested comments
    content TEXT NOT NULL,
    likes_count INTEGER DEFAULT 0,
    is_edited BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Game plays tracking for analytics
CREATE TABLE IF NOT EXISTS game_plays (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    user_id VARCHAR(255) REFERENCES users(auth0_id) ON DELETE SET NULL, -- Anonymous plays allowed
    session_id VARCHAR(255), -- For anonymous tracking
    play_duration INTEGER, -- in seconds
    completed BOOLEAN DEFAULT FALSE,
    score INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Collections/Playlists for organizing favorite games
CREATE TABLE IF NOT EXISTS collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) REFERENCES users(auth0_id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT TRUE,
    thumbnail_url TEXT,
    games_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS collection_games (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    collection_id UUID REFERENCES collections(id) ON DELETE CASCADE,
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    UNIQUE(collection_id, game_id)
);

-- Indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_games_creator_id ON games(creator_id);
CREATE INDEX IF NOT EXISTS idx_games_created_at ON games(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_games_likes_count ON games(likes_count DESC);
CREATE INDEX IF NOT EXISTS idx_games_plays_count ON games(plays_count DESC);
CREATE INDEX IF NOT EXISTS idx_games_is_public ON games(is_public) WHERE is_public = TRUE;
CREATE INDEX IF NOT EXISTS idx_games_is_featured ON games(is_featured) WHERE is_featured = TRUE;
CREATE INDEX IF NOT EXISTS idx_games_is_trending ON games(is_trending) WHERE is_trending = TRUE;
CREATE INDEX IF NOT EXISTS idx_games_tags ON games USING GIN(tags);

CREATE INDEX IF NOT EXISTS idx_likes_user_id ON likes(user_id);
CREATE INDEX IF NOT EXISTS idx_likes_game_id ON likes(game_id);
CREATE INDEX IF NOT EXISTS idx_shares_game_id ON shares(game_id);
CREATE INDEX IF NOT EXISTS idx_comments_game_id ON comments(game_id);
CREATE INDEX IF NOT EXISTS idx_game_plays_game_id ON game_plays(game_id);

-- Triggers for updating counters
CREATE OR REPLACE FUNCTION update_game_likes_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE games SET likes_count = likes_count + 1 WHERE id = NEW.game_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE games SET likes_count = likes_count - 1 WHERE id = OLD.game_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_likes_count
    AFTER INSERT OR DELETE ON likes
    FOR EACH ROW EXECUTE FUNCTION update_game_likes_count();

-- Function to update shares count
CREATE OR REPLACE FUNCTION update_game_shares_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE games SET shares_count = shares_count + 1 WHERE id = NEW.game_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_shares_count
    AFTER INSERT ON shares
    FOR EACH ROW EXECUTE FUNCTION update_game_shares_count();

-- Function to update plays count
CREATE OR REPLACE FUNCTION update_game_plays_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE games SET plays_count = plays_count + 1 WHERE id = NEW.game_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_plays_count
    AFTER INSERT ON game_plays
    FOR EACH ROW EXECUTE FUNCTION update_game_plays_count();

-- Function to update user total stats
CREATE OR REPLACE FUNCTION update_user_stats()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE users SET
            total_maps_created = (SELECT COUNT(*) FROM games WHERE creator_id = NEW.creator_id AND is_public = TRUE),
            total_likes_received = (SELECT SUM(likes_count) FROM games WHERE creator_id = NEW.creator_id AND is_public = TRUE)
        WHERE auth0_id = NEW.creator_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE users SET
            total_maps_created = (SELECT COUNT(*) FROM games WHERE creator_id = OLD.creator_id AND is_public = TRUE),
            total_likes_received = (SELECT SUM(likes_count) FROM games WHERE creator_id = OLD.creator_id AND is_public = TRUE)
        WHERE auth0_id = OLD.creator_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_user_stats
    AFTER INSERT OR DELETE OR UPDATE ON games
    FOR EACH ROW EXECUTE FUNCTION update_user_stats();

-- Sample data for development/demo with Auth0 format
INSERT INTO users (auth0_id, username, display_name, email, avatar_url, bio, auth0_provider, auth0_nickname, auth0_picture) VALUES
('auth0|648a1234567890abcdef1234', 'dragonmaster_ai', 'Dragon Master', 'dragon@example.com', '/avatars/dragon.jpg', 'Fantasy game creator specializing in medieval worlds 🏰', 'auth0', 'dragonmaster', 'https://s.gravatar.com/avatar/dragon.jpg'),
('google-oauth2|648b5678901234efghij5678', 'cyberpunk2077', 'Cyber Creator', 'cyber@gmail.com', '/avatars/cyber.jpg', 'Futuristic cityscapes and neon-lit adventures 🌆', 'google-oauth2', 'cyber.creator', 'https://lh3.googleusercontent.com/cyber.jpg'),
('github|648c9012345678klmnop9012', 'naturewizard', 'Nature Wizard', NULL, '/avatars/nature.jpg', 'Bringing magical forests to life 🌲✨', 'github', 'naturewizard', 'https://avatars.githubusercontent.com/nature'),
('auth0|648d3456789012qrstuv3456', 'pharaohbuilder', 'Pharaoh Builder', 'pharaoh@example.com', '/avatars/pharaoh.jpg', 'Ancient mysteries and desert adventures 🏜️', 'auth0', 'pharaohbuilder', 'https://s.gravatar.com/avatar/pharaoh.jpg'),
('google-oauth2|648e7890123456wxyzab7890', 'spaceexplorer', 'Space Explorer', 'space@gmail.com', '/avatars/space.jpg', 'Infinite galaxies await exploration 🚀', 'google-oauth2', 'space.explorer', 'https://lh3.googleusercontent.com/space.jpg'),
('discord|648f1234567890cdefgh1234', 'oceanbuilder', 'Ocean Builder', NULL, '/avatars/ocean.jpg', 'Underwater realms and sea creatures 🌊', 'discord', 'OceanBuilder#1234', 'https://cdn.discordapp.com/avatars/ocean.jpg');

-- Sample games data with Auth0 IDs
INSERT INTO games (title, description, game_url, thumbnail_url, creator_id, creator_name, likes_count, shares_count, plays_count, tags, difficulty_level) VALUES
('Fantasy Castle Realm', 'Epic fantasy castle with multiple towers, secret passages, and dragon lairs. Perfect for RPG adventures!', 'https://game.ai-creator.com/castle-123', '/thumbnails/castle.jpg',
    'auth0|648a1234567890abcdef1234', 'Dragon Master', 1234, 347, 5678, ARRAY['fantasy', 'castle', 'rpg', 'adventure'], 'medium'),

('Neon Cyber City', 'Futuristic cyberpunk city with neon lights, flying cars, and high-tech obstacles. Race through the digital matrix!', 'https://game.ai-creator.com/cyber-456', '/thumbnails/cyber.jpg',
    'google-oauth2|648b5678901234efghij5678', 'Cyber Creator', 856, 234, 3421, ARRAY['cyberpunk', 'city', 'racing', 'futuristic'], 'hard'),

('Enchanted Forest', 'Mystical forest filled with magical creatures, hidden treasures, and ancient trees that tell stories.', 'https://game.ai-creator.com/forest-789', '/thumbnails/forest.jpg',
    'github|648c9012345678klmnop9012', 'Nature Wizard', 2134, 456, 7890, ARRAY['fantasy', 'forest', 'magic', 'exploration'], 'easy'),

('Ancient Desert Temple', 'Mysterious desert temple with deadly traps, hidden chambers, and ancient Egyptian puzzles to solve.', 'https://game.ai-creator.com/temple-012', '/thumbnails/temple.jpg',
    'auth0|648d3456789012qrstuv3456', 'Pharaoh Builder', 743, 189, 4567, ARRAY['desert', 'temple', 'puzzle', 'adventure'], 'extreme'),

('Orbital Space Station', 'Zero-gravity space station with multiple modules, airlocks, and spectacular views of distant planets.', 'https://game.ai-creator.com/space-345', '/thumbnails/space.jpg',
    'google-oauth2|648e7890123456wxyzab7890', 'Space Explorer', 934, 267, 3456, ARRAY['space', 'sci-fi', 'exploration', 'zero-gravity'], 'medium'),

('Atlantis City', 'Breathtaking underwater city with coral structures, sea creatures, and ancient underwater civilization.', 'https://game.ai-creator.com/atlantis-678', '/thumbnails/atlantis.jpg',
    'discord|648f1234567890cdefgh1234', 'Ocean Builder', 1567, 312, 6789, ARRAY['underwater', 'atlantis', 'exploration', 'adventure'], 'medium');