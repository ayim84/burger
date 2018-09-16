$(function()
{
    $(".devoured").on("click", function(event)
    {
        var id = $(this).data("id");
        console.log("test");

        $.ajax("/api/burgers/" + id,
        {
            type: "PUT",
            data: {devoured: true}
        }).then(function()
        {
            location.reload();
        });
    });

    $(".createBurger").on("submit", function(event)
    {
        event.preventDefault();

        var newBurger =
        {
            burger_name: $("#burgerName").val().trim(),
            devoured: false
        };

        console.log(newBurger);

        $.ajax("/api/burgers/",
        {
            type: "POST",
            data: newBurger
        }).then(function()
        {
            console.log("Created new burger.");
            location.reload();
        });
    });
});

