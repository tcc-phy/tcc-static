import {
    Issue,
    College,
    Society,
    Team,
    TeamName,
    IssuePage,
    ParsedContent,
} from "@/types/data.types";
import getContent from "./loader";

class ContentStore {
    private issues: Issue[];
    private colleges: College[];
    private societies: Society[];
    private teamMembers: Team[];

    constructor(parsedContent: ParsedContent) {
        this.issues = parsedContent.issues;
        this.colleges = parsedContent.colleges;
        this.societies = parsedContent.societies;
        this.teamMembers = parsedContent.team;
    }

    getAllIssues(): Issue[] {
        return [...this.issues].sort(
            (a, b) =>
                new Date(b.releaseDate).getTime() -
                new Date(a.releaseDate).getTime()
        );
    }

    getLatestIssue(): Issue | undefined {
        return this.getAllIssues()[0];
    }

    getIssueById(id: string): Issue | undefined {
        return this.issues.find((i) => i.id === id);
    }

    getIssueCount(): number {
        return this.issues.length;
    }

    getAllTags(): string[] {
        const tagSet = new Set<string>();
        this.issues.forEach((issue) => {
            issue.tags.forEach((tag) => tagSet.add(tag));
        });
        return Array.from(tagSet);
    }

    getTagCount(): number {
        return this.getAllTags().length;
    }

    getPages(issueId: string): IssuePage[] | undefined {
        return this.getIssueById(issueId)?.pages ?? undefined;
    }

    getPage(issueId: string, pageNumber: number): IssuePage | undefined {
        return this.getPages(issueId)?.find(
            (p) => p.pageNumber === pageNumber
        ) ?? undefined;
    }

    getAllColleges(): College[] {
        return this.colleges;
    }

    getAllSocieties(): Society[] {
        return this.societies;
    }

    getAllTeamMembers(): Team[] {
        return this.teamMembers;
    }

    getTeamMembersByTeam(team: TeamName): Team[] {
        return this.teamMembers.filter((m) => m.teamName === team);
    }
}

const contentStore = new ContentStore(getContent());

export default contentStore;
