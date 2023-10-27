import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:von/helpers/von_colors.dart';
import 'package:von/helpers/von_extensions.dart';
import 'package:von/views/interface/components/von_bottom_nav_bar_icon.dart';

final selectedBottomNavBarIndexProvider = StateProvider((ref) => 0);

class VonBottomNavBar extends ConsumerWidget {
  const VonBottomNavBar({
    super.key,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final selectedPage = ref.watch(selectedBottomNavBarIndexProvider);

    return Theme(
      data: Theme.of(context).copyWith(
        splashColor: Colors.transparent,
        highlightColor: Colors.transparent,
        hoverColor: Colors.transparent,
      ),
      child: Padding(
        padding: const EdgeInsets.only(top: 16),
        child: BottomNavigationBar(
          currentIndex: selectedPage,
          onTap: (i) {
            ref.read(selectedBottomNavBarIndexProvider.notifier).state = i;
          },
          backgroundColor: context.theme.scaffoldBackgroundColor,
          enableFeedback: true,
          landscapeLayout: BottomNavigationBarLandscapeLayout.centered,
          showSelectedLabels: true,
          showUnselectedLabels: true,
          unselectedLabelStyle: const TextStyle(fontSize: 12),
          unselectedIconTheme: const IconThemeData(color: VonColors.muted),
          unselectedItemColor: VonColors.muted,
          selectedLabelStyle: const TextStyle(fontSize: 12),
          selectedIconTheme:
              IconThemeData(color: context.cs.onPrimaryContainer),
          selectedItemColor: context.cs.onPrimaryContainer,
          items: [
            BottomNavigationBarItem(
              label: context.vl.home,
              icon: const VonBottomNavBarIcon(
                  icon: Icon(
                FontAwesomeIcons.house,
                size: 22,
              )),
            ),
            BottomNavigationBarItem(
              label: context.vl.tripHistory,
              icon: const VonBottomNavBarIcon(
                  icon: Icon(
                FontAwesomeIcons.clockRotateLeft,
                size: 22,
              )),
            ),
            BottomNavigationBarItem(
              label: context.vl.settings,
              icon: const VonBottomNavBarIcon(
                icon: Icon(
                  FontAwesomeIcons.gear,
                  size: 22,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
