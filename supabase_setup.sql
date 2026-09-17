-- Script SQL para criar a tabela 'subscribers' no Supabase para Dra. Carola Moraes
-- Execute no SQL Editor do seu projeto Supabase

CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  whatsapp TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ativar RLS (Row Level Security)
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Permitir inserções públicas de novos inscritos
CREATE POLICY "Permitir inserções públicas de inscritos" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (true);

-- Permitir leitura de inscritos
CREATE POLICY "Permitir leitura de inscritos" 
ON public.subscribers 
FOR SELECT 
USING (true);