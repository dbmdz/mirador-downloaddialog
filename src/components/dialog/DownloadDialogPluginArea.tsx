import { PluginHook } from "mirador";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof PluginHook>;

const DownloadDialogPluginArea = (props: Props) => <PluginHook {...props} />;

export default DownloadDialogPluginArea;
