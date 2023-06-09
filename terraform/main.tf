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

    default_tags {
        tags = {
            Environment = "Production"
            Name        = "NoseyNeighbor"
        }
    }
}