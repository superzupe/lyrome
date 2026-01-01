import { supabase } from "../lib/supabase";

//GET ALL LYRICS
export const getLyrics = async () => {
  const { data, error } = await supabase
    .from("lyrics")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

//GET BY ID
export const getLyricById = async (id) => {
  const { data, error } = await supabase
    .from("lyrics")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

//CREATE
export const createLyric = async (payload) => {
  const { data, error } = await supabase
    .from("lyrics")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
};

//UPDATE
export const updateLyric = async (id, payload) => {
  const { data, error } = await supabase
    .from("lyrics")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

//DELETE
export const deleteLyric = async (id) => {
  const { error } = await supabase.from("lyrics").delete().eq("id", id);
  
  if (error) throw error;
};
