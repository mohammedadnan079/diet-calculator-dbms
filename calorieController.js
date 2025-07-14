const Calorie = require('./calorieModel');

exports.calculateCalories = (req, res) => {
  const { age, weight, height, gender, activityLevel } = req.body;

  // Calculate calories based on user input (example formula)
  const calories = calculateCalories(age, weight, height, gender, activityLevel);

  // Save the calorie data to the database
  Calorie.create({ age, weight, height, gender, activityLevel, calories })
    .then((calorie) => {
      res.status(200).json({ success: true, data: calorie });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err.message });
    });
};

// Example function to calculate calories (you can replace it with your own logic)
function calculateCalories(age, weight, height, gender, activityLevel) {
  // Example formula (replace with your own)
  let baseCalories = gender === 'male' ? 10 * weight + 6.25 * height - 5 * age + 5 : 10 * weight + 6.25 * height - 5 * age - 161;
  let calories = baseCalories * activityLevel;
  return calories;
}
