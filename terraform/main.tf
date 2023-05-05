terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = ">= 4.19"
        }
    }
}

provider "aws" {
    region = "us-east-1"
    access_key = "AKIAR5WQUCSGF466L7GS"
    secret_key = "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"
}