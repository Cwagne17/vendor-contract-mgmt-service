-- setup tables

CREATE TABLE "work-type" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "type" character varying(45) NOT NULL,
    CONSTRAINT "UQ_8fa95cd60f83bee822ab191f86d" UNIQUE ("type"),
    CONSTRAINT "PK_35b5c9bb5a800808d4b43c83254" PRIMARY KEY ("id")
);

CREATE TABLE "vendor" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "vendor_name" character varying(45) NOT NULL,
    "first_name" character varying(45) NOT NULL,
    "last_name" character varying(45) NOT NULL,
    "selection_method" text NOT NULL,
    "status" "public"."vendor_status_enum",
    "contact_phone_number" character varying(12) NOT NULL,
    "contact_email" text NOT NULL,
    "memo" text NOT NULL,
    "workTypeId" uuid,
    CONSTRAINT "UQ_701b24047c58971f09e04b39bf6" UNIQUE ("vendor_name"),
    CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id")
);

CREATE TABLE "contract" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "amount" integer NOT NULL,
    "contract_date" date NOT NULL,
    "contract_end_date" date NOT NULL,
    "memo" text NOT NULL DEFAULT '',
    "condition" text NOT NULL DEFAULT '',
    "vendorId" uuid,
    "workTypeId" uuid,
    CONSTRAINT "PK_17c3a89f58a2997276084e706e8" PRIMARY KEY ("id")
);

CREATE TABLE "payment-info" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "amount" integer NOT NULL,
    "check_number" character varying(4) NOT NULL,
    "current_date" date NOT NULL,
    "memo" text NOT NULL,
    "contractId" uuid,
    CONSTRAINT "PK_c6c1e81b6fc6176faf843832a78" PRIMARY KEY ("id")
);

-- Add foreign key relationships

ALTER TABLE "vendor" ADD CONSTRAINT "FK_189350c40b071ce8a2ce06a13a8" FOREIGN KEY ("workTypeId") REFERENCES "work-type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "contract" ADD CONSTRAINT "FK_0f68607f987317eb92d6ebe131a" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "contract" ADD CONSTRAINT "FK_5e3c6a0c53f33dfdafc750e2a0b" FOREIGN KEY ("workTypeId") REFERENCES "work-type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "payment-info" ADD CONSTRAINT "FK_b22501cd92c172d0b4e8c1f3697" FOREIGN KEY ("contractId") REFERENCES "contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;