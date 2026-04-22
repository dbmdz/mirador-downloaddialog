declare module "mirador" {
  import { ComponentType, ReactElement, ReactNode } from "react";

  export interface Canvas {
    id: string;
    index?: number;
    getCanonicalImageUri: (width: number) => string;
    getHeight: () => number;
    getWidth: () => number;
  }

  export function getCanvasLabel(
    state: unknown,
    props: { canvasId: string; windowId: string },
  ): string | number | undefined;

  export function getConfig(state: unknown): {
    id?: string;
    [key: string]: unknown;
  };

  export function getManifestSeeAlso(
    state: unknown,
    props: { windowId: string },
  ): { format?: string; label?: string; value?: string }[];

  export function getManifestUrl(
    state: unknown,
    props: { windowId: string },
  ): string | undefined;

  export function getVisibleCanvases(
    state: unknown,
    props: { windowId: string },
  ): Canvas[];

  export function getWindowConfig(
    state: unknown,
    props: { windowId: string },
  ): Record<string, unknown>;

  export function selectInfoResponse(
    state: unknown,
    props: { canvasId?: string; infoId?: string; windowId?: string },
  ): { json?: { sizes?: { height: number; width: number }[] } } | undefined;

  export function updateWindow(
    id: string,
    payload: Record<string, unknown>,
  ): { id: string; payload: Record<string, unknown>; type: string };

  export const MiradorMenuButton: ComponentType<{
    "aria-label": string;
    "aria-expanded"?: boolean;
    "aria-haspopup"?: boolean;
    badge?: boolean;
    BadgeProps?: object;
    children: ReactElement;
    containerId?: string;
    dispatch?: () => void;
    onClick?: () => void;
    selected?: boolean;
    sx?: object;
    TooltipProps?: object;
  }>;

  export const PluginHook: ComponentType<{
    targetName?: string;
    [key: string]: unknown;
  }>;

  export const ScrollIndicatedDialogContent: ComponentType<{
    children?: ReactNode;
    classes?: { shadowScrollDialog?: string };
    className?: string;
    dividers?: boolean;
  }>;

  export function withPlugins<
    P extends Record<string, unknown> = Record<string, unknown>,
  >(targetName: string): (component: ComponentType<P>) => ComponentType<P>;

  export function viewer(
    config: Record<string, unknown>,
    plugins?: unknown[],
  ): void;
}
