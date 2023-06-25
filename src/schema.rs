// @generated automatically by Diesel CLI.

#![allow(missing_docs)]

diesel::table! {
    branches (name) {
        #[max_length = 50]
        name -> Varchar,
        start_date -> Integer,
        end_date -> Integer,
        concretion -> Tinyint,
        category -> Tinyint,
        #[max_length = 100]
        image -> Varchar,
        #[max_length = 200]
        description -> Varchar,
        #[max_length = 7]
        color -> Varchar,
        #[max_length = 50]
        parent -> Varchar,
    }
}
