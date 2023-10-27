import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:von/helpers/von_colors.dart';
import 'package:von/helpers/von_extensions.dart';

class ActionTile extends StatelessWidget {
  const ActionTile({
    Key? key,
    required this.title,
    required this.description,
    required this.color,
    required this.icon,
  }) : super(key: key);

  final String title;
  final String description;
  final Color color;
  final Widget icon;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          height: 48,
          width: 48,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8),
            color: color,
          ),
          child: icon,
        ),
        const SizedBox(width: 16),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: const TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 16,
                ),
              ),
              const SizedBox(height: 2),
              Text(
                description,
                style: const TextStyle(
                  fontSize: 12,
                  color: VonColors.muted,
                ),
              ),
            ],
          ),
        ),
        Transform.flip(
          flipX: context.directionality == TextDirection.rtl,
          child: const Icon(
            FontAwesomeIcons.angleRight,
          ),
        ),
      ],
    );
  }
}
