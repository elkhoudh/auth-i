exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          firstname: "Hamza",
          lastname: "Elkhoudiri",
          username: "elkhoudh",
          password: "elkhoudh"
        },
        {
          id: 2,
          firstname: "Hamza",
          lastname: "Elkhoudiri",
          username: "elkhoudh1",
          password: "elkhoudh"
        },
        {
          id: 3,
          firstname: "Hamza",
          lastname: "Elkhoudiri",
          username: "elkhoudh2",
          password: "elkhoudh"
        }
      ]);
    });
};
