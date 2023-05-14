import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:von/views/von/von.dart';

void main() => runApp(
      const ProviderScope(
        child: Von(),
      ),
    );
