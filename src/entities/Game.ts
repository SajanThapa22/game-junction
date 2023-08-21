import { Publisher } from "./Publisher";
import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Screenshot } from "./Screenshot";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  genres: Genre[];
  publishers: Publisher[];
}
