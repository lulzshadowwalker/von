import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:von/helpers/von_colors.dart';

final themeProvider = Provider((ref) => VonTheme(ref));

final class VonTheme {
  VonTheme(this.ref);
  final Ref ref;

  // TODO, localized font family
  static String? get primaryFontFamily => GoogleFonts.poppins().fontFamily;
  static String? get secondaryFontFamily => GoogleFonts.russoOne().fontFamily;

  static const _dividerThemeData = DividerThemeData(
    thickness: 2,
    indent: 15,
    endIndent: 15,
    color: VonColors.muted,
  );

  static final _elevatedButtonTheme = ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: _seedColor,
      foregroundColor: VonColors.white,
      minimumSize: const Size.fromHeight(42),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      padding: const EdgeInsets.symmetric(vertical: 18),
    ),
  );

  static final _bottomNavBarTheme = BottomNavigationBarThemeData(
    backgroundColor: Colors.transparent,
    elevation: 0,
    unselectedIconTheme: IconThemeData(
      color: VonColors.muted,
      size: 30,
    ),
    showUnselectedLabels: false,
    showSelectedLabels: false,
  );

  static final _outlinedButtonTheme = OutlinedButtonThemeData(
    style: OutlinedButton.styleFrom(
      side: const BorderSide(
        color: _seedColor,
      ),
      minimumSize: const Size.fromHeight(42),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      padding: const EdgeInsets.symmetric(vertical: 18),
    ),
  );

  static const _seedColor = VonColors.blue;

  ThemeData light() {
    final colorScheme = ColorScheme.fromSeed(
      brightness: Brightness.light,
      seedColor: _seedColor,
    ).copyWith(primary: _seedColor);

    return ThemeData.light().copyWith(
      useMaterial3: true,

      //
      colorScheme: colorScheme,

      drawerTheme: const DrawerThemeData(
        backgroundColor: VonColors.white,
      ),

      //
      iconTheme: const IconThemeData(
        color: VonColors.black,
      ),

      //
      textTheme: ThemeData.light().textTheme.apply(
            fontFamily: primaryFontFamily,
            bodyColor: VonColors.black,
            displayColor: VonColors.black,
            decorationColor: VonColors.black,
          ),

      //
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        foregroundColor: VonColors.black,
        elevation: 0,
        centerTitle: true,
        surfaceTintColor: Colors.transparent,
        systemOverlayStyle: SystemUiOverlayStyle.dark,
      ),

      //
      scaffoldBackgroundColor: VonColors.white,

      //
      dividerTheme: _dividerThemeData,

      //
      elevatedButtonTheme: _elevatedButtonTheme,

      //
      outlinedButtonTheme: _outlinedButtonTheme,

      //
      bottomNavigationBarTheme: _bottomNavBarTheme.copyWith(
        selectedIconTheme: IconThemeData(
          color: colorScheme.primary,
          size: 30,
        ),
      ),

      //
      splashColor: colorScheme.primaryContainer,
      highlightColor: Colors.transparent,
    );
  }

  ThemeData dark() {
    final colorScheme = ColorScheme.fromSeed(
      brightness: Brightness.dark,
      seedColor: const Color.fromARGB(255, 103, 146, 238),
    );

    return ThemeData.dark().copyWith(
      useMaterial3: true,

      //
      colorScheme: colorScheme,

      drawerTheme: const DrawerThemeData(
        backgroundColor: VonColors.black,
      ),

      //
      iconTheme: const IconThemeData(
        color: VonColors.white,
      ),

      //
      textTheme: ThemeData.dark().textTheme.apply(
            fontFamily: primaryFontFamily,
            bodyColor: VonColors.white,
            displayColor: VonColors.white,
            decorationColor: VonColors.white,
          ),

      //
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        foregroundColor: VonColors.white,
        elevation: 0,
        centerTitle: true,
        surfaceTintColor: Colors.transparent,
        systemOverlayStyle: SystemUiOverlayStyle.light,
      ),

      //
      scaffoldBackgroundColor: VonColors.black,

      //
      dividerTheme: _dividerThemeData,

      //
      elevatedButtonTheme: _elevatedButtonTheme,

      //
      outlinedButtonTheme: _outlinedButtonTheme,

      //
      bottomNavigationBarTheme: _bottomNavBarTheme.copyWith(
        selectedIconTheme: IconThemeData(
          color: colorScheme.primary,
          size: 30,
        ),
      ),

      //
      splashColor: colorScheme.primaryContainer,
      highlightColor: Colors.transparent,
    );
  }
}
