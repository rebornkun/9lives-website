import BriefcaseSVG from "@/components/assests/svg/BriefcaseSVG";
import ChartSvg from "@/components/assests/svg/ChartSvg";
import DoubleHeartSvg from "@/components/assests/svg/DoubleHeartSvg";
import HeartSvg from "@/components/assests/svg/HeartSvg";
import HouseSvg from "@/components/assests/svg/HouseSvg";
import LightningSvg from "@/components/assests/svg/LightningSvg";
import MoonSvg from "@/components/assests/svg/MoonSvg";
import PeopleSvg from "@/components/assests/svg/PeopleSvg";
import TeacherSvg from "@/components/assests/svg/TeacherSvg";

export const exploreCards = [
  {
    icon: <BriefcaseSVG />,
    rotate: "up",
    title: "Work",
    body: "Connect with spaces, roles, or communities aligned with your grind.",
    footer: "→ Coworking, job boards, mentors",
  },
  {
    icon: <TeacherSvg />,
    rotate: "up",
    title: "School",
    body: "Study groups, learning hubs, and student events near you.",
    footer: "→ Meet learners like you",
  },
  {
    icon: <HeartSvg />,
    rotate: "down",
    title: "Health",
    body: "Track your wellness and discover health-driven communities.",
    footer: "→ Yoga, therapy, mindfulness",
  },
  {
    icon: <LightningSvg />,
    rotate: "up",
    title: "Fitness",
    body: "Stay active with local gyms, runs, or classes.",
    footer: "→ Move with others",
  },
  {
    icon: <MoonSvg />,
    rotate: "down",
    title: "Spiritual",
    body: "Find peace or connect with others on a deeper journey.",
    footer: "→ Meditation, gatherings, reflections",
  },
  {
    icon: <DoubleHeartSvg />,
    rotate: "down",
    title: "Love",
    body: "Meet people who share your rhythm — in life or mindset.",
    footer: "→ Connection beyond the scroll",
  },
  {
    icon: <HouseSvg />,
    rotate: "up",
    title: "House",
    body: "Looking to move, improve, or settle? Find home-minded spaces.",
    footer: "→ Roommate boards, rentals, DIY hubs",
  },
  {
    icon: <ChartSvg />,
    rotate: "up",
    title: "Finances",
    body: "Workshops, tips, and events that grow your financial clarity.",
    footer: "→ Budgeting, investing, side gigs",
  },
  {
    icon: <PeopleSvg />,
    rotate: "up",
    title: "Family",
    body: "Local experiences and support networks for your home team.",
    footer: "→ Parent groups, playdates, family plans",
  },
];

export const Tags = [
  "Note",
  "Match making",
  "Community",
  "Productivity",
  "Habit tracking",
  "Calendar",
];
