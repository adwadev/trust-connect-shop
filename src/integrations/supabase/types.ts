export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      brand: {
        Row: {
          id: number
          logo_url: string | null
          name: string
        }
        Insert: {
          id?: number
          logo_url?: string | null
          name: string
        }
        Update: {
          id?: number
          logo_url?: string | null
          name?: string
        }
        Relationships: []
      }
      certificates: {
        Row: {
          created_at: string
          date_issued: string | null
          file_url: string | null
          id: string
          issuer: string | null
          title: string
        }
        Insert: {
          created_at?: string
          date_issued?: string | null
          file_url?: string | null
          id?: string
          issuer?: string | null
          title: string
        }
        Update: {
          created_at?: string
          date_issued?: string | null
          file_url?: string | null
          id?: string
          issuer?: string | null
          title?: string
        }
        Relationships: []
      }
      contact_info: {
        Row: {
          email: string | null
          facebook_url: string | null
          id: number
          instagram_url: string | null
          linkedin_url: string | null
          phone: string | null
          telegram_url: string | null
          twitter_url: string | null
        }
        Insert: {
          email?: string | null
          facebook_url?: string | null
          id?: number
          instagram_url?: string | null
          linkedin_url?: string | null
          phone?: string | null
          telegram_url?: string | null
          twitter_url?: string | null
        }
        Update: {
          email?: string | null
          facebook_url?: string | null
          id?: number
          instagram_url?: string | null
          linkedin_url?: string | null
          phone?: string | null
          telegram_url?: string | null
          twitter_url?: string | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          is_read: boolean | null
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_read?: boolean | null
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean | null
          message?: string
          name?: string
        }
        Relationships: []
      }
      demo_requests: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          message: string | null
          phone: string
          school_name: string
          status: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          message?: string | null
          phone: string
          school_name: string
          status?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string | null
          phone?: string
          school_name?: string
          status?: string
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          created_at: string
          display_order: number
          id: string
          question: string
        }
        Insert: {
          answer: string
          created_at?: string
          display_order: number
          id?: string
          question: string
        }
        Update: {
          answer?: string
          created_at?: string
          display_order?: number
          id?: string
          question?: string
        }
        Relationships: []
      }
      features: {
        Row: {
          created_at: string
          description: string
          display_order: number
          icon: string
          id: string
          title: string
        }
        Insert: {
          created_at?: string
          description: string
          display_order: number
          icon: string
          id?: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string
          display_order?: number
          icon?: string
          id?: string
          title?: string
        }
        Relationships: []
      }
      hero: {
        Row: {
          demo_video_url: string | null
          headline: string | null
          id: number
          image_url: string | null
          subheadline: string | null
        }
        Insert: {
          demo_video_url?: string | null
          headline?: string | null
          id?: number
          image_url?: string | null
          subheadline?: string | null
        }
        Update: {
          demo_video_url?: string | null
          headline?: string | null
          id?: number
          image_url?: string | null
          subheadline?: string | null
        }
        Relationships: []
      }
      page_visits: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          full_name: string | null
          id: string
          restaurant_id: number | null
          role: Database["public"]["Enums"]["user_role"]
        }
        Insert: {
          full_name?: string | null
          id: string
          restaurant_id?: number | null
          role: Database["public"]["Enums"]["user_role"]
        }
        Update: {
          full_name?: string | null
          id?: string
          restaurant_id?: number | null
          role?: Database["public"]["Enums"]["user_role"]
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          description: string | null
          github_url: string | null
          id: string
          image_url: string | null
          live_url: string | null
          tech_stack: string[] | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          live_url?: string | null
          tech_stack?: string[] | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          live_url?: string | null
          tech_stack?: string[] | null
          title?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          created_at: string | null
          key: string
          updated_at: string | null
          value: string | null
        }
        Insert: {
          created_at?: string | null
          key: string
          updated_at?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string | null
          key?: string
          updated_at?: string | null
          value?: string | null
        }
        Relationships: []
      }
      skills: {
        Row: {
          created_at: string
          icon: string | null
          id: string
          level: number
          name: string
        }
        Insert: {
          created_at?: string
          icon?: string | null
          id?: string
          level: number
          name: string
        }
        Update: {
          created_at?: string
          icon?: string | null
          id?: string
          level?: number
          name?: string
        }
        Relationships: []
      }
      tables: {
        Row: {
          created_at: string
          id: number
          restaurant_id: number
          table_number: number
        }
        Insert: {
          created_at?: string
          id?: never
          restaurant_id: number
          table_number: number
        }
        Update: {
          created_at?: string
          id?: never
          restaurant_id?: number
          table_number?: number
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar_url: string | null
          company: string | null
          created_at: string
          id: string
          name: string
          quote: string | null
          role: string | null
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          id?: string
          name: string
          quote?: string | null
          role?: string | null
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          id?: string
          name?: string
          quote?: string | null
          role?: string | null
        }
        Relationships: []
      }
      vision: {
        Row: {
          headline: string | null
          id: number
          image_url: string | null
          paragraph1: string | null
          paragraph2: string | null
        }
        Insert: {
          headline?: string | null
          id?: number
          image_url?: string | null
          paragraph1?: string | null
          paragraph2?: string | null
        }
        Update: {
          headline?: string | null
          id?: number
          image_url?: string | null
          paragraph1?: string | null
          paragraph2?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_email_by_username: {
        Args: { p_username: string }
        Returns: string
      }
      get_my_restaurant_id: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_my_role: {
        Args: Record<PropertyKey, never>
        Returns: Database["public"]["Enums"]["user_role"]
      }
    }
    Enums: {
      order_status: "Pending" | "Preparing" | "Served" | "Rejected"
      user_role: "system_admin" | "restaurant_admin" | "waiter"
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
      order_status: ["Pending", "Preparing", "Served", "Rejected"],
      user_role: ["system_admin", "restaurant_admin", "waiter"],
    },
  },
} as const
