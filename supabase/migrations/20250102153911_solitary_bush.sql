/*
  # Quiz Database Schema

  1. New Tables
    - `quiz_responses`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `whatsapp` (text)
      - `answers` (jsonb)
      - `created_at` (timestamp)
    
  2. Security
    - Enable RLS on `quiz_responses` table
    - Add policy for inserting data
*/

CREATE TABLE quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text,
  whatsapp text,
  answers jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users" ON quiz_responses
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Enable select for all users" ON quiz_responses
  FOR SELECT TO anon
  USING (true);
