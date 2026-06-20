export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      issuePages: {
        Row: {
          id: string
          imageUrl: string
          issueid: string | null
          pageNumber: number
        }
        Insert: {
          id?: string
          imageUrl: string
          issueid?: string | null
          pageNumber: number
        }
        Update: {
          id?: string
          imageUrl?: string
          issueid?: string | null
          pageNumber?: number
        }
        Relationships: [
          {
            foreignKeyName: "issuepages_issueid_fkey"
            columns: ["issueid"]
            isOneToOne: false
            referencedRelation: "issues"
            referencedColumns: ["id"]
          },
        ]
      }
      issues: {
        Row: {
          abstract: string
          coverImageUrl: string | null
          id: string
          name: string
          releaseDate: string
          slug: string
          tags: string[]
          title: string
        }
        Insert: {
          abstract: string
          coverImageUrl?: string | null
          id?: string
          name: string
          releaseDate?: string
          slug: string
          tags?: string[]
          title: string
        }
        Update: {
          abstract?: string
          coverImageUrl?: string | null
          id?: string
          name?: string
          releaseDate?: string
          slug?: string
          tags?: string[]
          title?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          authorName: string
          content: string
          createdAt: string | null
          id: string
          issueId: string | null
          status: Database["public"]["Enums"]["reviewstatus"]
        }
        Insert: {
          authorName: string
          content: string
          createdAt?: string | null
          id?: string
          issueId?: string | null
          status?: Database["public"]["Enums"]["reviewstatus"]
        }
        Update: {
          authorName?: string
          content?: string
          createdAt?: string | null
          id?: string
          issueId?: string | null
          status?: Database["public"]["Enums"]["reviewstatus"]
        }
        Relationships: [
          {
            foreignKeyName: "reviews_issueId_fkey"
            columns: ["issueId"]
            isOneToOne: false
            referencedRelation: "issues"
            referencedColumns: ["id"]
          },
        ]
      }
      societies: {
        Row: {
          coverImgUrl: string | null
          id: string
          name: string
        }
        Insert: {
          coverImgUrl?: string | null
          id?: string
          name: string
        }
        Update: {
          coverImgUrl?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      teams: {
        Row: {
          id: string
          name: string
          profileImgUrl: string
          socials: Json | null
          teamName: Database["public"]["Enums"]["teamname"]
        }
        Insert: {
          id?: string
          name: string
          profileImgUrl: string
          socials?: Json | null
          teamName: Database["public"]["Enums"]["teamname"]
        }
        Update: {
          id?: string
          name?: string
          profileImgUrl?: string
          socials?: Json | null
          teamName?: Database["public"]["Enums"]["teamname"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      reviewstatus: "PENDING" | "APPROVED" | "REJECTED"
      teamname: "DESIGN" | "OUTREACH" | "MARKETING"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      reviewstatus: ["PENDING", "APPROVED", "REJECTED"],
      teamname: ["DESIGN", "OUTREACH", "MARKETING"],
    },
  },
} as const
