import 'package:flutter/material.dart';
import 'package:von/helpers/von_colors.dart';
import 'package:von/views/routes/components/location_tile.dart';

class LocationStepper extends StatelessWidget {
  const LocationStepper({
    required this.locations,
    super.key,
  });

  final List<String> locations;
  final double _separatorWidth = 1;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ...List.generate(
          locations.length,
          (index) => Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              LocationTile(
                iconColor: index == 0 || index == locations.length - 1
                    ? VonColors.red
                    : VonColors.blue,
                title: locations[index],
                tag: index == 0
                    ? 'Trip Start'
                    : index == locations.length - 1
                        ? 'Trip End'
                        : 'Pick Up',
              ),
              if (index != locations.length - 1)
                Container(
                  margin: EdgeInsetsDirectional.only(
                    start: LocationTile.size * 0.5 - _separatorWidth * 0.5,
                    top: 5,
                    bottom: 5,
                  ),
                  width: _separatorWidth,
                  height: 20,
                  color: VonColors.muted,
                ),
            ],
          ),
        ),
      ],
    );
  }
}
