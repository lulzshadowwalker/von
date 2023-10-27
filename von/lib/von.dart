import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/von_localizations.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:von/helpers/von_const.dart';
import 'package:von/views/auth/login/login.dart';

import 'theme/von_theme.dart';

class Von extends ConsumerWidget {
  const Von({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final theme = ref.watch(themeProvider);

    return MaterialApp(
      title: 'Von',
      debugShowCheckedModeBanner: false,
      localizationsDelegates: VL.localizationsDelegates,
      supportedLocales: VL.supportedLocales,
      locale: const Locale(VonConst.en),
      theme: theme.light(),
      home: const Login(),
    );
  }
}
