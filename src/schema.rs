// @generated automatically by Diesel CLI.

pub mod sql_types {
    #[derive(diesel::sql_types::SqlType)]
    #[diesel(mysql_type(name = "Enum"))]
    pub struct BranchesCategoryEnum;
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::BranchesCategoryEnum;

    branches (name) {
        #[max_length = 50]
        name -> Varchar,
        start_date -> Integer,
        end_date -> Integer,
        concretion -> Tinyint,
        #[max_length = 17]
        category -> BranchesCategoryEnum,
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
