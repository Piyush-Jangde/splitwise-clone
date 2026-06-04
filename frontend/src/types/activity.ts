export interface Activity {
  id: string;
  activityType: string;
  entityId: string | null;
  metadata: Record<string, unknown> | null;
  createdAt: string;

  actor: {
    id: string;
    fullName: string;
    email: string;
  };
}