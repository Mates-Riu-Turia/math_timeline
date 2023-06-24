CREATE TABLE branches (
    name VARCHAR(50) PRIMARY KEY NOT NULL,
    start_date INT(4) NOT NULL,
    end_date INT(4) NOT NULL,
    concretion TINYINT NOT NULL,
    category ENUM('IndependentBranch', 'DerivedBranch', 'BranchInBranch') NOT NULL,
    image VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    color VARCHAR(7) NOT NULL,
    parent VARCHAR(50) NOT NULL
);