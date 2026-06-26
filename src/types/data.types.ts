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
    releaseDate: Date;
}

export type IssueFilled = Issue & {
    pages: IssuePage[];
}

export const ReviewStatus = {
    PENDING: "PENDING",
    APPROVED: "APPROVED",
    REJECTED: "REJECTED"
};

export type ReviewStatus = typeof ReviewStatus[keyof typeof ReviewStatus];

export type Review = {
    id: string;
    issueId: string;
    authorName: string;
    rating: number;
    content?: string;
    status: ReviewStatus;
    createdAt: Date;
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
    REPRESENTATIVE: "REPRESENTATIVE",
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
