import { Suspense } from "react";

import {
  ContributedRepoType,
  LanguagesType,
  OrganizationType,
  ProfileType,
} from "@/types";

import {
  Contribution,
  Language,
  LanguageSkeleton,
  Organization,
  OrganizationSkeleton,
  Profile,
  ProfileSkeleton,
  Section,
} from "@/components";

type UserPageClientProps = {
  profileData: ProfileType | null;
  languagesData: LanguagesType | null;
  organizations: OrganizationType[] | null;
  contributedRepos: ContributedRepoType[] | null;
};

export const UserPageClient = ({
  profileData,
  languagesData,
  organizations,
  contributedRepos,
}: UserPageClientProps) => {
  return (
    <div className="mt-4 w-full max-w-[1200px]">
      <div
        className="
          flex flex-col px-5 gap-3 w-full
          lg:max-w-[1200px] lg:h-[900px]
          lg:grid lg:grid-cols-12 lg:grid-rows-9
        "
      >
        <div
          className="
            flex flex-col gap-3
            lg:grid lg:col-span-3 lg:row-span-6
          "
        >
          <Suspense fallback={<ProfileSkeleton className="row-span-8" />}>
            <Profile profileData={profileData} className="row-span-8" />
          </Suspense>
          <Suspense fallback={<LanguageSkeleton className="row-span-2" />}>
            <Language languageData={languagesData} className="row-span-2" />
          </Suspense>
          <Suspense fallback={<OrganizationSkeleton className="row-span-1" />}>
            <Organization
              oranizationsData={organizations}
              className="row-span-1"
            />
          </Suspense>
        </div>

        <div
          className="
            flex flex-col gap-3
            lg:col-span-9 lg:row-span-6
          "
        >
          <div className="grid grid-cols-9 grid-rows-4 gap-3 h-full w-full">
            <Section title="Summary" className="col-span-9 row-span-1">
              프로필
            </Section>

            <Contribution
              className="col-span-5 row-span-4"
              contributedRepoData={contributedRepos}
            />

            <Section title="Repositories" className="col-span-4 row-span-4">
              프로필
            </Section>
          </div>
        </div>

        <Section className="col-span-12 row-span-2">프로필</Section>
      </div>
    </div>
  );
};
