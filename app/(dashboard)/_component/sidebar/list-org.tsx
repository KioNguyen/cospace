"use client";

import { useOrganizationList } from "@clerk/nextjs";

export default function ListOrg() {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) {
    return null;
  }

  console.log("🚀 ~ ListOrg ~ userMemberships:", userMemberships);
  return (
    <ul className="space-y-4">
      {userMemberships.data.map((org) => (
        <li key={org.id}>
          <a
            href={`/dashboard/org/${org.id}`}
            className="block p-2 bg-gray-100 rounded-md"
          >
            {org.organization.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
