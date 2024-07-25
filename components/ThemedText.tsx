import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
    fontSize?: number;
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    fontSize,
    type = "default",
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    const styles = StyleSheet.create({
        default: {
            fontSize: fontSize ? fontSize : 14,
            lineHeight: 24,
            fontFamily: "DMSans",
        },
        defaultSemiBold: {
            fontSize: fontSize ? fontSize : 14,
            lineHeight: 24,
            fontFamily: "DMSans",
            fontWeight: "600",
        },
        title: {
            fontSize: fontSize ? fontSize : 32,
            fontFamily: "DMSans",
            fontWeight: "bold",
            lineHeight: 32,
        },
        subtitle: {
            fontSize: fontSize ? fontSize : 14,
            fontFamily: "DMSans",
            fontWeight: "bold",
        },
        link: {
            fontSize: fontSize ? fontSize : 14,
            fontFamily: "DMSans",
            color: "#0a7ea4",
        },
    });

    return (
        <Text
            style={[
                { color },
                type === "default" ? styles.default : undefined,
                type === "title" ? styles.title : undefined,
                type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
                type === "subtitle" ? styles.subtitle : undefined,
                type === "link" ? styles.link : undefined,
                style,
            ]}
            {...rest}
        />
    );
}
