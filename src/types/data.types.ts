export type IssuePage = {
    pageNumber: number;
    imageUrl: string;
}

export type Issue = {
    id: string;
    name: string;
    title: string;
    slug: string;
    coverImageUrl: string | null;
    abstract: string;
    tags: string[];
    pages: IssuePage[];
    releaseDate: Date;
}

export type Review = {
    id: string;
    authorName: string;
    content: string;
    date: Date;
};

export type College = {
    id: string;
    name: string;
    coverImgUrl: string | null;
}

export type Society = {
    id: string;
    name: string;
    collegeId?: string;
    coverImgUrl: string | null;
}

export const TeamName = {
    DESIGN: "DESIGN",
    OUTREACH: "OUTREACH",
    MARKETING: "MARKETING",
} as const;

export type TeamName = typeof TeamName[keyof typeof TeamName];

export type Team = {
    id: string;
    name: string;
    profileImgUrl: string;
    teamName: TeamName;
    socials: {
        linkedInUrl?: string;
        twitterUrl?: string;
        instagramUrl?: string;
    };
}

export type RawContent = {
    issues: (Omit<Issue, "releaseDate"> & {
        releaseDate: string;
    })[];
    colleges: College[];
    societies: Society[];
    team: Team[];
}

export type ParsedContent = {
    issues: Issue[];
    colleges: College[];
    societies: Society[];
    team: Team[];
}
