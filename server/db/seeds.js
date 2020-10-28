use hotel;
db.dropDatabase();


db.guests.insertMany([
    {
        name: "Jimmy Johnson",
        email: "JimmyJ@happyfuntimes.co.ck",
        checkedIn: "Yes"
    },
    {
        name: "Tommy Tompson",
        email: "TimTam@grotmail.gr.ot",
        checkedIn: "No"
    },
    {
        name: "Melly Mel",
        email: "FuriousFive@smashthestate.ca.ke",
        checkedIn: "Yes"
    }
]);