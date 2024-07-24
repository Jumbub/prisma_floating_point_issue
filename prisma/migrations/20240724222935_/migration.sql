-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "single" DECIMAL(65,30) NOT NULL,
    "obj" JSONB NOT NULL,
    "arr" JSONB[],

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
