use crate::schema::*;
use diesel::{prelude::*, r2d2::ConnectionManager, MysqlConnection};
use serde::{Deserialize, Serialize};

/// Type alias for the DB connection to use in multiple places
pub type Pool = r2d2::Pool<ConnectionManager<MysqlConnection>>;

#[derive(Deserialize, Serialize, Queryable, Insertable)]
#[diesel(table_name = branches)]
/// A struct that is used for querying the branches table
pub struct Branch {
    /// An string with the name of the branch, primary key
    pub name: String,
    /// An integer with the year that the branch appear
    pub start_date: i32,
    /// An integer with the year that the branch disappear
    pub end_date: i32,
    /// An integer with the concretion level, it's the zoom you have to do for seeing it
    pub concretion: i8,
    /// An integer with the category of the branch.
    /// 0 -> If the branch is independent from the other branches
    /// 1 -> If the branch is a fork from another
    /// 2 -> If the branch is inside another branch
    pub category: i8,
    /// An image related to the branch
    pub image: String,
    /// The parent of the branch, if category is equal to 0, this will be ignored
    pub parent: String,
}