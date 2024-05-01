import MemberName from "../constants/MemberName";
import MemberDisplayName from "../constants/MemberDisplayName";

type MemberType = {
  member_name: string;
  member_display_name: string;
};

const integrateMembers = (): MemberType[] => {
  const entries = Object.entries(MemberName); // Get key-value pairs from MemberName
  const integratedMembers: MemberType[] = entries.map(([key, value]) => {
    const displayNameKey = key.replace("MN", "MDN"); // Convert MN00001 to MDN00001
    const displayName =
      MemberDisplayName[displayNameKey as keyof typeof MemberDisplayName];
    return {
      member_name: value,
      member_display_name: displayName,
    };
  });
  return integratedMembers;
};

export default integrateMembers;
