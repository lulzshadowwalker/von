import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:von/helpers/von_colors.dart';
import 'package:von/helpers/von_extensions.dart';
import 'package:von/views/home/home.dart';
import 'package:von/views/interface/components/von_bottom_nav_bar.dart';

class Interface extends HookConsumerWidget {
  const Interface({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final selectedPage = ref.watch(selectedBottomNavBarIndexProvider);

    return Scaffold(
      bottomNavigationBar: const VonBottomNavBar(),

      /// TODO, lazily loaded indexed stack
      body: IndexedStack(
        alignment: Alignment.center,
        index: selectedPage,
        children: const [
          Home(),
          Home(),
          Home(),
        ],
      ),
    );
  }
}
