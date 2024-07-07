"use client";

import { useOrganizationList } from "@clerk/nextjs";
import OrganizationItem from "./item";

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
          <OrganizationItem
            id={org.id}
            name={org.organization.name}
            imageUrl={org.organization.imageUrl}
          />
        </li>
      ))}
    </ul>
  );
}
