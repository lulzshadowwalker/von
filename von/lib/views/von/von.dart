import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/von_localizations.dart';
import 'package:von/helpers/von_const.dart';
import 'package:von/router/von_router.dart';

import '../../theme/von_theme.dart';

class Von extends StatelessWidget {
  const Von({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Von',
      debugShowCheckedModeBanner: false,
      localizationsDelegates: VonLocalizations.localizationsDelegates,
      supportedLocales: VonLocalizations.supportedLocales,
      locale: const Locale(VonConst.en),
      theme: VonTheme.light(context),
      routerConfig: VonRouter.config,
    );
  }
}
