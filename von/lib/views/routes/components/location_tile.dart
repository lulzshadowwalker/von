import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:von/helpers/von_colors.dart';

class LocationTile extends StatelessWidget {
  const LocationTile({
    required this.title,
    required this.tag,
    this.iconColor = VonColors.red,
    super.key,
  });

  final String title;
  final String tag;
  final Color iconColor;
  static const double size = 48;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          height: size,
          width: size,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8),
            border: Border.all(
              color: VonColors.muted,
            ),
          ),
          child: Icon(
            FontAwesomeIcons.locationDot,
            color: iconColor,
          ),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                tag,
                style: const TextStyle(
                  fontSize: 12,
                  color: VonColors.muted,
                ),
              ),
              const SizedBox(height: 2),
              Text(
                title,
                style: const TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 16,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
