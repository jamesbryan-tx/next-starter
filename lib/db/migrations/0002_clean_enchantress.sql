ALTER TABLE "posts" ALTER COLUMN "published" SET DEFAULT false;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN IF EXISTS "author_id";