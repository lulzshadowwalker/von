import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:von/helpers/von_colors.dart';
import 'package:von/helpers/von_extensions.dart';
import 'package:von/views/routes/components/location_tile.dart';
import 'package:von/views/routes/location_stepper.dart';
import 'package:von/views/shared/von_back_button/von_back_button.dart';

class Routes extends StatelessWidget {
  const Routes({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Container(
            color: Colors.grey,
          ),
          const RoutesSheet(),
          const Positioned(
            left: 20,
            top: 20,
            child: SafeArea(
              child: VonBackButton(),
            ),
          ),
        ],
      ),
    );
  }
}

class RoutesSheet extends StatefulWidget {
  const RoutesSheet({super.key});

  @override
  State<RoutesSheet> createState() => _RoutesSheetState();
}

class _RoutesSheetState extends State<RoutesSheet> {
  final _sheet = GlobalKey();
  final _controller = DraggableScrollableController();

  @override
  Widget build(BuildContext context) {
    return DraggableScrollableSheet(
      key: _sheet,
      initialChildSize: 0.5,
      maxChildSize: 0.8,
      minChildSize: 0.4,
      expand: true,
      snap: true,
      snapSizes: const [0.5],
      controller: _controller,
      builder: (BuildContext context, ScrollController scrollController) {
        return DecoratedBox(
          decoration: BoxDecoration(
            color: context.cs.onPrimary,
            borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(12),
              topRight: Radius.circular(12),
            ),
          ),
          child: CustomScrollView(
            physics: const ClampingScrollPhysics(),
            controller: scrollController,
            slivers: [
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Align(
                        alignment: Alignment.center,
                        child: Container(
                          margin: const EdgeInsets.symmetric(vertical: 25),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(50),
                            color: VonColors.muted,
                          ),
                          height: 6,
                          width: 60,
                        ),
                      ),
                      DropdownMenu<String>(
                        width: context.mq.size.width - 40,
                        enableFilter: true,
                        leadingIcon: const Icon(FontAwesomeIcons.compass),
                        hintText: 'Select a route',
                        dropdownMenuEntries: const [
                          DropdownMenuEntry(
                            value: '3',
                            label: 'Amman ⎯ JUST',
                          ),
                          DropdownMenuEntry(
                            value: '1',
                            label: 'item',
                          ),
                          DropdownMenuEntry(
                            value: '2',
                            label: 'item',
                          ),
                        ],
                        inputDecorationTheme: const InputDecorationTheme(
                          filled: true,
                          contentPadding: EdgeInsets.symmetric(vertical: 5.0),
                        ),
                        onSelected: (String? item) {},
                      ),
                      const Padding(
                        padding: EdgeInsets.only(
                          top: 36,
                          bottom: 24,
                        ),
                        child: Text(
                          'Trip Path',
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      const LocationStepper(
                        locations: [
                          'One',
                          'Two',
                          'Three',
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
