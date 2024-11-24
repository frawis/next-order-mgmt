CREATE TYPE "public"."platform_type" AS ENUM('order', 'sale', 'both');--> statement-breakpoint
CREATE TYPE "public"."reveive_periode" AS ENUM('daily', 'weekly', 'monthly');--> statement-breakpoint
CREATE TYPE "public"."shipping_status" AS ENUM('pending', 'ready_to_ship', 'shipped', 'in_transit', 'out_for_delivery', 'delivered', 'failed_delivery', 'returned');--> statement-breakpoint
CREATE TYPE "public"."user_orders_state" AS ENUM('pending', 'processing', 'shipped', 'out_for_delivery', 'delivered', 'cancelled', 'returned', 'failed_delivery', 'awaiting_payment', 'refunded');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "platforms" (
	"id" bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "platforms_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"type" "platform_type" NOT NULL,
	"api_key" text,
	"api_user" text,
	"api_url" text,
	"webhook_url" text,
	"config" jsonb,
	"logo_url" text,
	"inserted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "platforms" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_activities" (
	"id" bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "user_activities_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"entity_type" "entity_type" NOT NULL,
	"entity_id" bigint NOT NULL,
	"user_id" text DEFAULT (auth.user_id()) NOT NULL,
	"action" text NOT NULL,
	"inserted_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_activities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_sales" (
	"id" bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "user_sales_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"user_id" text DEFAULT (auth.user_id()) NOT NULL,
	"product_name" text NOT NULL,
	"platform" bigint NOT NULL,
	"sale_date" date NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"shipping_status" "shipping_status" NOT NULL,
	"buyer_info" text,
	"tracking_number" varchar(255),
	"inserted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_sales" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user_orders" ALTER COLUMN "dealer" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "user_orders" ALTER COLUMN "state" SET DATA TYPE user_orders_state;--> statement-breakpoint
ALTER TABLE "user_orders" ALTER COLUMN "state" SET DEFAULT 'pending';--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "street" varchar(255);--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "city" varchar(255);--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "zip" varchar(20);--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "region" varchar(255);--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "country" varchar(255);--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "currency" varchar(10) DEFAULT 'EUR' NOT NULL;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "send_newsletter" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "receive_notifications" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "reveive_periode" "reveive_periode" DEFAULT 'daily';--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_sales" ADD CONSTRAINT "user_sales_platform_platforms_id_fk" FOREIGN KEY ("platform") REFERENCES "public"."platforms"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_orders" ADD CONSTRAINT "user_orders_dealer_platforms_id_fk" FOREIGN KEY ("dealer") REFERENCES "public"."platforms"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE POLICY "crud-anonymous-policy-select" ON "platforms" AS PERMISSIVE FOR SELECT TO "anonymous" USING (true);--> statement-breakpoint
CREATE POLICY "crud-anonymous-policy-insert" ON "platforms" AS PERMISSIVE FOR INSERT TO "anonymous" WITH CHECK (false);--> statement-breakpoint
CREATE POLICY "crud-anonymous-policy-update" ON "platforms" AS PERMISSIVE FOR UPDATE TO "anonymous" USING (false) WITH CHECK (false);--> statement-breakpoint
CREATE POLICY "crud-anonymous-policy-delete" ON "platforms" AS PERMISSIVE FOR DELETE TO "anonymous" USING (false);--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-select" ON "platforms" AS PERMISSIVE FOR SELECT TO "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-insert" ON "platforms" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-update" ON "platforms" AS PERMISSIVE FOR UPDATE TO "authenticated" USING (true) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-delete" ON "platforms" AS PERMISSIVE FOR DELETE TO "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-select" ON "user_activities" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.user_id() = "user_activities"."user_id"));--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-insert" ON "user_activities" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.user_id() = "user_activities"."user_id"));--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-update" ON "user_activities" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.user_id() = "user_activities"."user_id")) WITH CHECK ((select auth.user_id() = "user_activities"."user_id"));--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-delete" ON "user_activities" AS PERMISSIVE FOR DELETE TO "authenticated" USING ((select auth.user_id() = "user_activities"."user_id"));--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-select" ON "user_sales" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.user_id() = "user_sales"."user_id"));--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-insert" ON "user_sales" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.user_id() = "user_sales"."user_id"));--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-update" ON "user_sales" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.user_id() = "user_sales"."user_id")) WITH CHECK ((select auth.user_id() = "user_sales"."user_id"));--> statement-breakpoint
CREATE POLICY "crud-authenticated-policy-delete" ON "user_sales" AS PERMISSIVE FOR DELETE TO "authenticated" USING ((select auth.user_id() = "user_sales"."user_id"));