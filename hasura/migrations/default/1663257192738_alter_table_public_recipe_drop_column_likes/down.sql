alter table "public"."recipe" alter column "likes" drop not null;
alter table "public"."recipe" add column "likes" int4;
