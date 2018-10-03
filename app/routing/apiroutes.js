var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {

        res.json(friends);
    });
    app.post("/api/friends", function(req, res) 
{
    var scoreDifference = 1000;
        var Match;
    	var difference = [];

        var score= req.body['score[]'].map(function(num) {
            return parseInt(num);
        });

        for (var i = 0; i < friends.length; i++) 
        {
            var matchScore = friends[i]['score[]'].map(function(num) {
                return num.parseInt;
            });

            for (var j = 0; j < score.length; j++) 
            {
                var difference = score[j] - matchScore[j];

                if (difference < 0) {

                    difference = difference * -1;
                }
                difference.push(difference);

            }

            var totalDifference = difference.reduce(function(sum, value) {
                return sum + value;
            });
    
            if (totalDifference <= scoreDifference) {
                scoreDifference = totalDifference;
               Match = friends[i];
            }
            difference = [];
         }

        res.json(Match);
       friends.push(req.body);
    });
}
