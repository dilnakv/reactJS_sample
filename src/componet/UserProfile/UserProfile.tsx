import { useState } from "react";
import styles from "./UserProfile.module.css";

type UserProfileData = {
  id: number;
  name: string;
  email: string;
  mobile: string;
  skills: string[];
};

export const UserProfile = () => {
  const [user] = useState<UserProfileData>({
    id: 101,
    name: "Dilna K Vasavan",
    email: "dilna@example.com",
    mobile: "9876543210",
    skills: ["React", "TypeScript", "Node.js", "CSS Modules"]
  });

  return (
    <div className={styles.container}>
      <h2>User Profile</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Mobile:</strong> {user.mobile}</p>

      <h3>Skills</h3>
      <ul className={styles.skillsList}>
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
