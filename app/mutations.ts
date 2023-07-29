import { type Database } from "@/lib/schema";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type NewEntry = Database["public"]["Tables"]["species"]["Insert"];

export async function addSpecies(input: NewEntry) {
  const supabase = createClientComponentClient<Database>();
  return await supabase.from("species").insert([
    {
      author: input.author,
      common_name: input.common_name,
      description: input.description,
      kingdom: input.kingdom,
      scientific_name: input.scientific_name,
      total_population: input.total_population,
      image: input.image,
    },
  ]);
}
