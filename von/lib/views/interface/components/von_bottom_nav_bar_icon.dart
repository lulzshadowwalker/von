import 'package:flutter/material.dart';

class VonBottomNavBarIcon extends StatelessWidget {
  const VonBottomNavBarIcon({
    required this.icon,
    super.key,
  });

  final Widget icon;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: icon,
    );
  }
}
