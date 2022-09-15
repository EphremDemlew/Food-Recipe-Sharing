CREATE TABLE "public"."likes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "like" integer NOT NULL, "recipe_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("recipe_id") REFERENCES "public"."recipe"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
