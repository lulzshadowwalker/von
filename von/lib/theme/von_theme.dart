import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/von_localizations.dart';
import 'package:von/helpers/von_colors.dart';

class VonTheme {
  static const String enFontFamily = '';
  static const String ruFontFamily = '';

  static String? _fontFamily(BuildContext context) =>
      // KatTranslations.currentLangCode(context) == KatConst.en
      //     ? enFontFamilyذ`
      //     : enFontFamily;
      '';

  /// returns a map of all the currently supported themes and their corresponding translated names
  static Map<Brightness, String> themes(BuildContext context) => {
        Brightness.dark: VonLocalizations.of(context).dark,
        Brightness.light: VonLocalizations.of(context).light,
      };

  static String? currentThemeName(BuildContext context) =>
      themes(context)[brightness];

  static Brightness brightness(BuildContext context) =>
      Theme.of(context).brightness;

  /// returns [true] if current theme's brightness is [Brightness.light]
  static bool isLight(BuildContext context) =>
      brightness(context) == Brightness.light;

  /// returns light by default, unless changed by the user in the settings.
  static ThemeMode get themeMode {
    return ThemeMode.light;
    // final storage = GetStorage();

    // final themeMode = storage.read<String>(KatConst.themeMode);
    // switch (themeMode) {
    //   case KatConst.systemDefault:
    //     return ThemeMode.system;
    //   case KatConst.light:
    //     return ThemeMode.light;
    //   case KatConst.dark:
    //     return ThemeMode.dark;
    //   default:
    //     return ThemeMode.light;
    // }
  }

  static const _dividerThemeData = DividerThemeData(
    thickness: 2,
    indent: 15,
    endIndent: 15,
  );

  //
  // ─── LIGHT THEME ────────────────────────────────────────────────────────────────
  //
  static ThemeData light(BuildContext context) {
    return ThemeData.light().copyWith(
      useMaterial3: true,

      //
      textTheme: ThemeData.light().textTheme.apply(
            fontFamily: _fontFamily(context),
          ),

      //
      scaffoldBackgroundColor: VonColors.white,

      //
      dividerTheme: _dividerThemeData,
    );
  }
  //
  // ────────────────────────────────────────────────────────────── LIGHT THEME ─────
  //
}
