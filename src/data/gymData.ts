export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  durationDays: number;
  durationLabel: string;
  monthlyBreakdown?: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  features: string[];
}

export interface PersonalTrainingPlan {
  id: string;
  duration: string;
  price: number;
  priceFormatted: string;
  features: string[];
}

export interface ScheduleItem {
  day: string;
  activity: string;
  time: string;
  type: 'zumba' | 'abs' | 'yoga' | 'steam-ladies' | 'steam-gents';
  instructor?: string;
}

export interface FeatureCategory {
  id: string;
  category: string;
  description: string;
  features: {
    title: string;
    description: string;
    iconName: string;
  }[];
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
  avatarBg: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'classes' | 'facilities' | 'transformations';
  image: string;
  caption: string;
}

export const GYM_DETAILS = {
  name: 'L C FITNESS CLUB',
  tagline: 'Join with us and Fit Forever.',
  owner: 'Anand Jankar',
  address: 'Sr. No. 38, Manjari Road, Keshavnagar, Mundhwa, Pune – 411036',
  area: 'Keshavnagar, Mundhwa, Pune',
  primaryPhone: '9762444458',
  secondaryPhones: ['7040728758', '8380900090'],
  email: 'lcfitnessclubpune@gmail.com',
  rating: 4.4,
  reviewCount: 465,
  instagramFollowers: '40.7K',
  instagramPosts: 909,
  instagramHandle: '@lcfitnessclubpune',
  instagramUrl: 'https://instagram.com/',
  whatsappNumber: '919762444458',
  timings: {
    weekday: '6:00 AM – 10:30 PM',
    weekdayOpenHour: 6,
    weekdayCloseHour: 22.5, // 10:30 PM
    sunday: '7:00 AM – 12:00 PM',
    sundayOpenHour: 7,
    sundayCloseHour: 12,
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1891823908865!2d73.9312!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTUnNTIuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'plan-1m',
    name: '1 Month',
    price: 1500,
    durationDays: 30,
    durationLabel: '30 Days',
    features: [
      'Full Gym & Cardio Access',
      'Certified Trainer Guidance',
      'Locker & Washroom Facility',
      'Full AC Workout Environment',
      'General Diet Consultation',
    ]
  },
  {
    id: 'plan-3m',
    name: '3 Months',
    price: 3500,
    durationDays: 90,
    durationLabel: '90 Days',
    monthlyBreakdown: '₹1,166 / month',
    isPopular: true,
    features: [
      'Everything in 1 Month',
      'Steam Bath Access',
      'Complimentary Fitness Assessment',
      'Access to Zumba & Yoga Batches',
      'Progress Tracking Every 30 Days',
      'Save ₹1,000 compared to monthly',
    ]
  },
  {
    id: 'plan-6m',
    name: '6 Months',
    price: 5500,
    durationDays: 180,
    durationLabel: '180 Days',
    monthlyBreakdown: '₹916 / month',
    features: [
      'Everything in 3 Months',
      'Ladies Special Batch Access',
      '2 Free Guest Passes',
      'Nutritional Meal Charting',
      'Free Locker Reservation',
      'Save ₹3,500 compared to monthly',
    ]
  },
  {
    id: 'plan-12m',
    name: '12 Months',
    price: 8500,
    durationDays: 365,
    durationLabel: '365 Days',
    monthlyBreakdown: '₹708 / month',
    isBestValue: true,
    features: [
      'Everything in 6 Months',
      'Unlimited Steam Bath Sessions',
      'Priority Trainer Allocation',
      '4 Free Guest Passes',
      'Free Merchandise / Shaker',
      'Best Value – Less than ₹24/day!',
    ]
  }
];

export const ALL_INCLUSIVE_PLANS: MembershipPlan[] = [
  {
    id: 'all-1m',
    name: 'Monthly Pass',
    price: 1499,
    durationDays: 30,
    durationLabel: '30 Days',
    features: [
      'Access to Gym + Cardio + CrossFit',
      'Unlimited Zumba Dance Batches',
      'Unlimited Yoga & Flexibility Batches',
      'Special Core Conditioning ABS Batches',
      'Full AC Floor & Lockers Access',
    ]
  },
  {
    id: 'all-3m',
    name: '3 Months Pass',
    price: 3999,
    durationDays: 90,
    durationLabel: '90 Days',
    monthlyBreakdown: '₹1,333 / month',
    isPopular: true,
    features: [
      'Everything in Monthly Pass',
      'Complimentary Steam Bath Access',
      'Tailored Workout Charting',
      'Save ₹498 compared to monthly',
    ]
  },
  {
    id: 'all-6m',
    name: '6 Months Pass',
    price: 6999,
    durationDays: 180,
    durationLabel: '180 Days',
    monthlyBreakdown: '₹1,166 / month',
    features: [
      'Everything in 3 Months Pass',
      'Ladies Special Batches Access',
      'Personal Diet Chart & Advisory',
      'Save ₹1,995 compared to monthly',
    ]
  },
  {
    id: 'all-12m',
    name: 'Yearly Pass',
    price: 11999,
    durationDays: 365,
    durationLabel: '365 Days',
    monthlyBreakdown: '₹999 / month',
    isBestValue: true,
    features: [
      'Everything in 6 Months Pass',
      'Priority Trainer Consultation',
      'Unlimited Spa & Steam Sessions',
      'Best Value – Less than ₹33/day!',
    ]
  }
];

export const PERSONAL_TRAINING_PLANS: PersonalTrainingPlan[] = [
  {
    id: 'pt-1m',
    duration: '1 Month',
    price: 5000,
    priceFormatted: '₹5,000',
    features: [
      '1-on-1 Dedicated Trainer',
      'Customized Daily Workout Plan',
      'Bi-Weekly Body Composition Measurement',
      'Personalized Calorie & Diet Plan',
      'Form & Posture Correction',
    ]
  },
  {
    id: 'pt-3m',
    duration: '3 Months',
    price: 15000,
    priceFormatted: '₹15,000',
    features: [
      '1-on-1 Certified Master Trainer',
      'Customized Workout & Diet Plan',
      'Weekly Transformation Analytics',
      'Supplementation Advisory',
      'Flexibility & Recovery Sessions',
      'Guaranteed Body Composition Shift',
    ]
  },
  {
    id: 'pt-6m',
    duration: '6 Months',
    price: 30000,
    priceFormatted: '₹30,000',
    features: [
      'Dedicated Senior Fitness Coach',
      'Complete Fat Loss / Muscle Gain Blueprint',
      '24/7 WhatsApp Trainer Support',
      'Weekly Progress Photography & Scans',
      'Specialized Posture Rehabilitation',
      'Free Personal Training Starter Kit',
    ]
  },
  {
    id: 'pt-12m',
    duration: '1 Year',
    price: 55000,
    priceFormatted: '₹55,000',
    features: [
      'VIP Year-Round Transformation Coaching',
      'Elite Certified Head Trainer Assigned',
      'Custom Seasonal Diet & Habit Coaching',
      'Injury Prevention & Mobility Care',
      'Unlimited Progress & Metabolic Tracking',
      'Maximum Savings & Guaranteed Results',
    ]
  }
];

export const WHY_CHOOSE_US_CATEGORIES: FeatureCategory[] = [
  {
    id: 'training-equipment',
    category: 'Training & Equipment',
    description: 'State-of-the-art machinery and certified guidance to maximize your reps and safety.',
    features: [
      {
        title: 'Professional & Certified Trainers',
        description: 'Guided by internationally accredited fitness coaches dedicated to your posture and goals.',
        iconName: 'Award'
      },
      {
        title: 'Modern Biomechanical Equipment',
        description: 'Imported weight machines, cable towers, and free weights for precise muscle activation.',
        iconName: 'Dumbbell'
      },
      {
        title: 'Dedicated Cardio Zone',
        description: 'High-end treadmills, cross-trainers, and spin bikes with heart-rate tracking.',
        iconName: 'Activity'
      },
      {
        title: 'CrossFit & Functional Arena',
        description: 'Kettlebells, battle ropes, plyo boxes, and slam balls for high-octane conditioning.',
        iconName: 'Flame'
      },
      {
        title: 'Targeted Weight Loss Programs',
        description: 'Scientifically designed fat-burn protocols combining resistance and HIIT.',
        iconName: 'TrendingUp'
      }
    ]
  },
  
  {
    id: 'group-classes',
    category: 'Classes & Activities',
    description: 'High-energy, fun daily group workouts to keep your motivation peaking every morning.',
    features: [
      {
        title: 'Energetic Zumba Classes',
        description: 'Rhythmic, high-calorie burn dance fitness sessions on Mondays and Saturdays.',
        iconName: 'Music'
      },
      {
        title: 'Holistic Yoga Batches',
        description: 'Mindful breathing, flexibility, and core strengthening sessions every Wed, Thu, Fri.',
        iconName: 'Heart'
      },
      {
        title: 'Hardcore ABS Training',
        description: 'Focused core stabilization and abdominal sculpting workouts every Tuesday.',
        iconName: 'Shield'
      },
      {
        title: 'Personal Training Options',
        description: 'Direct 1-on-1 coaching for accelerated goals with customized attention.',
        iconName: 'UserCheck'
      }
    ]
  },
  {
    id: 'comfort-wellness',
    category: 'Comfort & Wellness',
    description: 'Clean, climate-controlled spaces designed for peak recovery and total relaxation.',
    features: [
      {
        title: 'Full AC Climate Control',
        description: 'Maintained at optimal temperature so you can train hard without overheating.',
        iconName: 'Wind'
      },
      {
        title: 'Therapeutic Steam Bath',
        description: 'Deep pore detox, muscle relaxation, and joint stress relief twice weekly.',
        iconName: 'Droplets'
      },
      {
        title: 'Relaxing Spa Section',
        description: 'Dedicated post-workout recovery area for stretching and rejuvenation.',
        iconName: 'Sparkles'
      },
      {
        title: 'Welcoming & Supportive Atmosphere',
        description: 'Zero-judgment, uplifting community environment where beginners thrive.',
        iconName: 'Users'
      }
    ]
  },
  {
    id: 'facilities-convenience',
    category: 'Facilities & Security',
    description: 'Thoughtfully planned amenities ensuring smooth daily workout routines.',
    features: [
      {
        title: 'Ladies Special Batch',
        description: 'Exclusive, comfortable training slots tailored specifically for women.',
        iconName: 'Sparkle'
      },
      {
        title: 'Secure Locker Rooms',
        description: 'Private lockers to store your valuables safely while you exercise.',
        iconName: 'Lock'
      },
      {
        title: 'Hygienic Washrooms & Showers',
        description: 'Spotlessly sanitized washrooms and hot showers for post-workout freshness.',
        iconName: 'Bath'
      },
      {
        title: 'In-House Protein Store',
        description: 'Authentic supplements, whey shakes, and pre-workouts available right on site.',
        iconName: 'Zap'
      },
      {
        title: 'Open Full Day Access',
        description: 'Flexible hours from 6:00 AM to 10:30 PM to fit any work schedule.',
        iconName: 'Clock'
      }
    ]
  }
];

export const WEEKLY_SCHEDULE: ScheduleItem[] = [
  { day: 'Monday', activity: 'Zumba Class', time: '7:30 AM – 8:30 AM', type: 'zumba', instructor: 'Certified Zumba Coach' },
  { day: 'Tuesday', activity: 'ABS Batch', time: '7:30 AM – 8:30 AM', type: 'abs', instructor: 'Core Specialist' },
  { day: 'Wednesday', activity: 'Yoga Session', time: '7:30 AM – 8:30 AM', type: 'yoga', instructor: 'Yogi Master' },
  { day: 'Wednesday', activity: 'Ladies Steam Day', time: 'Full Day Access', type: 'steam-ladies' },
  { day: 'Thursday', activity: 'Yoga Session', time: '7:30 AM – 8:30 AM', type: 'yoga', instructor: 'Yogi Master' },
  { day: 'Friday', activity: 'Yoga Session', time: '7:30 AM – 8:30 AM', type: 'yoga', instructor: 'Yogi Master' },
  { day: 'Saturday', activity: 'Zumba Class', time: '7:30 AM – 8:30 AM', type: 'zumba', instructor: 'Certified Zumba Coach' },
  { day: 'Sunday', activity: 'Gents Steam Day', time: '7:00 AM – 12:00 PM', type: 'steam-gents' },
];

export const FACILITIES_LIST: Facility[] = [
  {
    id: 'fac-1',
    title: 'Main Gym Floor',
    category: 'Strength Training',
    description: 'Spacious, high-ceiling workout arena equipped with heavy dumbbells, squat racks, and biomechanical plate-loaded machines.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    badge: 'Full AC'
  },
  {
    id: 'fac-2',
    title: 'Cardio Studio',
    category: 'Endurance',
    description: 'Dedicated row of commercial treadmills, elliptical trainers, and spin bikes with digital tracking.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'fac-3',
    title: 'Ladies Special Batch Area',
    category: 'Exclusive',
    description: 'Safe, private, and comfortable batch environment crafted specifically for female members with female trainers available.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
    badge: 'Women Favorite'
  },
  {
    id: 'fac-4',
    title: 'Detox Steam Room',
    category: 'Wellness',
    description: 'Therapeutic steam chamber for deep muscle relaxation and toxin elimination. Dedicated Ladies (Wed) & Gents (Sun) days.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    badge: 'Steam Bath'
  },
  {
    id: 'fac-5',
    title: 'CrossFit & Functional Zone',
    category: 'High Intensity',
    description: 'Rubberized flooring arena loaded with battle ropes, kettlebells, wall balls, and agility ladders.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'fac-6',
    title: 'Authentic Protein Store',
    category: 'Nutrition',
    description: 'On-site nutrition kiosk offering verified whey protein scoops, BCAA drinks, energy bars, and pre-workout shakes.',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80',
    badge: '100% Genuine'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Priya Sharma',
    rating: 5,
    date: '2 weeks ago',
    comment: 'L C Fitness Club is hands down the best gym in Keshavnagar! The Ladies Special Batch is super comfortable, and trainer Anand Jankar ensures everyone gets personal attention. Clean AC environment and great steam facility on Wednesdays.',
    tag: 'Ladies Batch Member',
    avatarBg: 'bg-gradient-to-tr from-pink-500 to-rose-400'
  },
  {
    id: 'rev-2',
    name: 'Rahul Deshmukh',
    rating: 5,
    date: '1 month ago',
    comment: 'Awesome gym equipment and polite staff! I joined the 12-month package at ₹8500 which is total value for money. The Zumba classes on Sat morning are super energetic. Highly recommended for professionals near Mundhwa.',
    tag: 'Annual Member',
    avatarBg: 'bg-gradient-to-tr from-blue-500 to-indigo-500'
  },
  {
    id: 'rev-3',
    name: 'Sneha Patil',
    rating: 5,
    date: '1 month ago',
    comment: 'Lost 7 kgs in 3 months with their Personal Training program! The trainers don’t just give exercises; they guide on nutrition and posture. The steam room on Wednesday is such a peaceful bonus.',
    tag: 'Personal Training Client',
    avatarBg: 'bg-gradient-to-tr from-amber-500 to-orange-400'
  },
  {
    id: 'rev-4',
    name: 'Amit Kulkarni',
    rating: 5,
    date: '3 months ago',
    comment: 'Cleanest gym in Mundhwa area with excellent ventilation and Full AC. Machinery is well-maintained and never overcrowded. Anand sir is very knowledgeable. 5 stars without doubt!',
    tag: 'Verified Google Reviewer',
    avatarBg: 'bg-gradient-to-tr from-emerald-500 to-teal-400'
  },
  {
    id: 'rev-5',
    name: 'Tanvi Joshi',
    rating: 5,
    date: '2 months ago',
    comment: 'The Yoga and ABS batches are fantastic! The vibe is very friendly and supportive. As a beginner, I was worried about gym intimidation, but L C Fitness Club welcomed me like family.',
    tag: 'Group Class Enthusiast',
    avatarBg: 'bg-gradient-to-tr from-purple-500 to-violet-400'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Can I book a free trial visit before taking a membership?',
    answer: 'Yes! We encourage all prospective members to experience L C Fitness Club first-hand. Click the "Book Free Visit" button to schedule your 1-day pass and tour our facilities in Keshavnagar.'
  },
  {
    id: 'faq-2',
    category: 'Ladies Special',
    question: 'Do you have dedicated timings or batches for women?',
    answer: 'Absolutely! We offer a dedicated Ladies Special Batch designed for women seeking a safe, comfortable, and supportive workout environment with certified guidance. Additionally, Wednesdays are reserved as Ladies Steam Day.'
  },
  {
    id: 'faq-3',
    category: 'Membership & Refund',
    question: 'Are membership packages refundable or transferable?',
    answer: 'As stated in our gym policy, all membership package amounts are non-refundable, non-transferable, and non-negotiable. We offer multi-month packages (3M, 6M, 12M) at heavily discounted per-month rates.'
  },
  {
    id: 'faq-4',
    category: 'Timings',
    question: 'What are the gym operating hours?',
    answer: 'We are open Full Day from Monday to Saturday between 6:00 AM and 10:30 PM. On Sundays, we operate a morning session from 7:00 AM to 12:00 PM.'
  },
  {
    id: 'faq-5',
    category: 'Personal Training',
    question: 'Does Personal Training include diet planning?',
    answer: 'Yes! All Personal Training packages (1M, 3M, 6M, 12M) include customized workout charts, regular body composition scans, posture correction, and personalized nutrition/dietary guidance.'
  },
  {
    id: 'faq-6',
    category: 'Facilities',
    question: 'Is parking space available at the gym location?',
    answer: 'Yes, convenient vehicle parking space is available for two-wheelers and cars right outside our building location at Manjari Road, Keshavnagar.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Keshavnagar Fitness Hub Overview',
    category: 'interior',
    image: '/gym-overview.png',
    caption: 'State-of-the-art dumbbell rack, yoga floor, and rating showcase at L C Fitness Club.'
  },
  {
    id: 'gal-2',
    title: 'High-Energy Zumba Batch',
    category: 'classes',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Members breaking a sweat in our Saturday Zumba dance class.'
  },
  {
    id: 'gal-3',
    title: 'Therapeutic Steam Chamber',
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    caption: 'Relaxing detox steam room with dedicated Ladies & Gents days.'
  },
  {
    id: 'gal-4',
    title: '1-on-1 Personal Training Session',
    category: 'classes',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Certified trainer providing posture correction and guidance.'
  },
  {
    id: 'gal-5',
    title: 'Cardio Line-up',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Commercial treadmills and ellipticals in our full AC floor.'
  },
  {
    id: 'gal-6',
    title: 'Morning Yoga Batch',
    category: 'classes',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    caption: 'Peaceful yoga stretching and mindfulness session.'
  },
  {
    id: 'gal-7',
    title: 'Protein & Supplement Station',
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Authentic supplements and post-workout protein shakes.'
  },
  {
    id: 'gal-8',
    title: 'CrossFit Arena Workout',
    category: 'transformations',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    caption: 'High intensity functional conditioning and battle rope drills.'
  }
];
