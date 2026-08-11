-- Run this once in Supabase Dashboard → SQL Editor.
create table if not exists public.edith_signups (
  email text primary key,
  source text not null default 'website',
  created_at timestamptz not null default now(),
  constraint edith_signups_email_not_blank check (length(trim(email)) > 3)
);

-- The public browser roles cannot read or write this table.
alter table public.edith_signups enable row level security;
revoke all on table public.edith_signups from anon, authenticated;
grant all on table public.edith_signups to service_role;

comment on table public.edith_signups is
  'Email addresses submitted through the EDITH build-in-public signup form.';
