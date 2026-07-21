export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'best-gym-workout-plan-beginners',
    title: 'The Ultimate Beginner Gym Workout Plan: Start Training Smarter',
    description: 'Starting your gym journey in Pune? Learn the essential strength training routine and cardio structure designed specifically for beginners.',
    category: 'Workout',
    author: 'Anand Jankar',
    authorRole: 'Founder & Certified Coach',
    date: 'July 18, 2026',
    readTime: '6 min read',
    image: 'https://ik.imagekit.io/0q9tfyg2b/classes/class1.jpg',
    tags: ['Workout', 'Beginner', 'Strength', 'Fitness'],
    content: `
      <h2>Starting Your Fitness Journey Correctly</h2>
      <p>Entering a gym for the first time can feel overwhelming. However, fitness is a journey of consistency and progression. By following a structured workout plan, you can avoid common injuries and optimize your initial muscle growth and stamina.</p>
      
      <h3>1. The Warm-Up Matrix (10 Minutes)</h3>
      <p>Never skip a warm-up. Warming up increases core body temperature and prepares joint lubrication. Focus on dynamic movements like arm circles, leg swings, and 5 minutes of light walking on the treadmill.</p>
      
      <h3>2. Full-Body Strength Training Blueprint</h3>
      <p>For the first 4 weeks, focus on full-body workouts three times per week (e.g. Monday, Wednesday, Friday). This allows optimal recovery time for beginners:</p>
      <ul>
        <li><strong>Goblet Squats:</strong> 3 sets of 10-12 reps</li>
        <li><strong>Dumbbell Chest Press:</strong> 3 sets of 10 reps</li>
        <li><strong>Lat Pulldowns:</strong> 3 sets of 12 reps</li>
        <li><strong>Planks:</strong> 3 sets of 30-45 seconds</li>
      </ul>

      <h3>3. Post-Workout Recovery</h3>
      <p>Conclude your sessions with deep static stretching. Recovering properly with clean protein intake and adequate sleep is where the magic of body transformation happens.</p>
    `
  },
  {
    slug: 'diet-plan-for-fat-loss-indian-diet',
    title: 'Fat Loss Nutrition Guide: Healthy Indian Diet Blueprint',
    description: 'Discover how to maintain a calorie deficit while enjoying healthy Indian meals. Perfect nutrition plan for weight loss in Keshavnagar, Pune.',
    category: 'Nutrition',
    author: 'Anand Jankar',
    authorRole: 'Nutritionist & Coach',
    date: 'July 15, 2026',
    readTime: '8 min read',
    image: 'https://ik.imagekit.io/0q9tfyg2b/facilities/gym-facility.jpg',
    tags: ['Nutrition', 'Diet', 'Weight Loss', 'Indian Diet'],
    content: `
      <h2>The Law of Calorie Deficit</h2>
      <p>Weight loss is fundamentally driven by consuming fewer calories than your body burns. However, starving is never the answer. The goal is to focus on high-volume, nutrient-dense foods that keep you full while boosting your daily metabolism.</p>
      
      <h3>1. Optimize Protein Intake</h3>
      <p>Protein preserves lean muscle mass during fat loss. Incorporate high-protein Indian staples such as paneer, double-toned milk, Greek yogurt, lentils, eggs, and lean chicken breast.</p>
      
      <h3>2. Swap Refined Carbs for Complex Carbs</h3>
      <p>Avoid highly processed foods. Swap white bread and refined flour (maida) for complex carbohydrates like oats, brown rice, millets (jowar/bajra), and whole wheat roti.</p>

      <h3>3. Hydration & Micro-Nutrients</h3>
      <p>Drinking at least 3-4 liters of clean water daily helps flush out toxins and keeps bloating at bay. Incorporate seasonal leafy greens, cucumbers, and citrus fruits for vital vitamins and minerals.</p>
    `
  },
  {
    slug: 'benefits-of-steam-bath-after-workout',
    title: 'Science-Backed Benefits of Steam Room Recovery Post-Workout',
    description: 'Learn why certified coaches recommend therapeutic steam baths after intense strength training sessions to relieve muscle soreness.',
    category: 'Recovery',
    author: 'Anand Jankar',
    authorRole: 'Founder & Certified Coach',
    date: 'July 12, 2026',
    readTime: '5 min read',
    image: 'https://ik.imagekit.io/0q9tfyg2b/facilities/steam-facility.jpg',
    tags: ['Recovery', 'Steam Bath', 'Spa', 'Health'],
    content: `
      <h2>The Power of Recovery</h2>
      <p>Training breaks down muscle fibers; rest and recovery rebuild them stronger. While lifting weights is essential, what you do after your workout determines how quickly your body heals and grows.</p>
      
      <h3>1. Alleviate Muscle Soreness (DOMS)</h3>
      <p>Steam bath heat improves blood circulation, dilating blood vessels and sending fresh oxygenated blood to tired, aching muscle fibers. This significantly reduces Delayed Onset Muscle Soreness.</p>
      
      <h3>2. Detoxification & Skin Health</h3>
      <p>Intense steam sweating opens up pores and helps flush metabolic waste products. It leaves your skin hydrated and glowing after a grueling workout session.</p>

      <h3>3. Respiratory & Cardiovascular Support</h3>
      <p>Breathing warm humid air helps soothe respiratory airways, while the gentle temperature elevation improves cardiovascular circulation, leaving you deeply relaxed and stress-free.</p>
    `
  }
];
